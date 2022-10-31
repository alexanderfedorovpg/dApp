import express, {response} from 'express';
import {PrismaClient} from '@prisma/client';
import {body, validationResult} from 'express-validator';
import {query} from 'express-validator/src/middlewares/validation-chain-builders';
import shortid from 'shortid';
import cors from 'cors';
import {siteUrl} from '../config';
import UserData from '../types/user-data';

const corsOptions = {
	origin:               siteUrl,
	optionsSuccessStatus: 200,
}
const server      = express();
server.use(express.json());
server.use(cors(corsOptions))

/**
 * API method save referral
 */
server.post('/api/v1/save-referral',
	body('addressUserFrom').isString(),
	body('addressUserTo').isNumeric(),
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

		await (new PrismaClient()).investorsTransactions.create({
			data
		});

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

		const data = {
			addressUser: req.body.addressUser,
			referralId:  shortid.generate()
		};

		await (new PrismaClient()).investor.create({
			data
		});

		res.json(data)
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

		const data = await (new PrismaClient()).investor.findFirst({
			where: {
				referralId: req.query.referralId
			}
		});

		const referralsData      = await (new PrismaClient()).investorsTransactions.groupBy({
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

		const profit             = referralsData.length > 0 ? referralsData[0]._sum.cost : 0
		const invited            = referralsData.length > 0 ? referralsData[0]._count.addressUserTo : 0

		const response: UserData = {
			addressUser:  data.addressUser,
			referralLink: data.referralId,
			profit,
			invited,
		};

		res.json(response)
	});

/**
 * API method get top referrals
 */
server.get('/api/v1/get-referrals', async (req, res) => {
	const topReferrals = await (new PrismaClient()).investorsTransactions.groupBy({
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

	res.send(result);
});

console.log(`
  You can navigate by url http://localhost:8081
`);

server.listen(8081);

