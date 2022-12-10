import express, {response} from 'express';
import {PrismaClient} from '@prisma/client';
import {body, validationResult} from 'express-validator';
import {query} from 'express-validator/src/middlewares/validation-chain-builders';
import shortid from 'shortid';
import cors from 'cors';
import {siteUrl} from '../config';
import CountersData from '../types/counters-data';
import UserData from '../types/user-data';
import {NIl_ADDRESS} from '../frontend/src/contract/types';
import {getAmount, getMembers} from './utils/counters';

const corsOptions = {
	origin:               siteUrl,
	optionsSuccessStatus: 200,
}
const server      = express();
const prisma      = new PrismaClient();

server.use(express.json());
server.use(cors(corsOptions))

/**
 * API method save referral
 */
server.post('/api/v1/save-referral',
	body('addressUserFrom').isString(),
	body('addressUserTo').isString(),
	body('cost').isNumeric(),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({errors: errors.array()});
		}

		const data = {
			addressUserFrom: req.body.addressUserFrom,
			addressUserTo:   req.body.addressUserTo,
			cost:            req.body.cost
		}

		await prisma.investorsTransactions.create({
			data
		});
		res.json(data)
	});

/**
 * API method get counters on homepage.
 */
server.get('/api/v1/counters',
	async (req, res) => {

		const query = await Promise.all([
			prisma.investor.count(),
			prisma.investorsTransactions.aggregate({
				_sum: {
					cost: true
				},
			})]);

		const members = getMembers(query[0])
		const amount = getAmount(query[1]._sum.cost, query[0])

		const data: CountersData = {
			amount,
			members
		}

		res.json(data)
	});

/**
 * API method add user
 */
server.post('/api/v1/user',
	body('addressUser').isString(),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({errors: errors.array()});
		}

		const data = await prisma.investor.upsert({
			where:  {
				addressUser: req.body.addressUser,
			},
			update: {},
			create: {
				addressUser: req.body.addressUser,
				referralId:  '',
			},
		});

		const response = {
			addressUser: data.addressUser,
			referralId:  data.referralId
		};

		res.json(response)
	});

server.post('/api/v1/add-link',
	body('addressUser').isString(),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({errors: errors.array()});
		}

		const data = await prisma.investor.upsert({
			where:  {
				addressUser: req.body.addressUser,
			},
			update: {
				referralId:  shortid.generate(),
				addressUser: req.body.addressUser,
			},
			create: {
				referralId:  shortid.generate(),
				addressUser: req.body.addressUser,
			},
		});

		const response = {
			addressUser: data.addressUser,
			referralId:  data.referralId
		};

		res.json(response)
	});

/**
 * API method get user
 */
server.get('/api/v1/user',
	query('referralId').isString(),
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({errors: errors.array()});
		}

		const data = await prisma.investor.findFirst({
			where: {
				referralId: req.query.referralId
			}
		});

		if (null === data) {
			const response: UserData = {
				addressUser: NIl_ADDRESS,
				referralId:  '',
				profit:      0,
				invited:     0,
			};

			return res.json(response)
		}

		const referralsData = await prisma.investorsTransactions.groupBy({
			by:      ['addressUserFrom'],
			_count:  {
				addressUserTo: true,
			},
			_sum:    {
				cost: true
			},
			orderBy: {
				_sum: {
					cost: 'desc'
				}
			},
			where:   {
				addressUserFrom: data.addressUser,
			}
		});

		const profit  = referralsData.length > 0 ? referralsData[0]._sum.cost : 0
		const invited = referralsData.length > 0 ? referralsData[0]._count.addressUserTo : 0

		const response: UserData = {
			addressUser: data.addressUser,
			referralId:  data.referralId,
			profit,
			invited,
		};

		res.json(response)
	});

/**
 * API method get top referrals
 */
server.get('/api/v1/get-referrals', async (req, res) => {
	const topReferrals = await prisma.investorsTransactions.groupBy({
		by:      ['addressUserFrom'],
		_count:  {
			addressUserTo: true,
		},
		_sum:    {
			cost: true
		},
		orderBy: {
			_sum: {
				cost: 'desc'
			}
		},
	});

	const result = [];
	topReferrals.forEach((row) => {
		result.push({address: row.addressUserFrom, attracted: row._count.addressUserTo, profit: row._sum.cost})
	})

	res.json(result);
});

console.log(`
  You can navigate by url http://localhost:8081
`);

server.listen(8081);

