import express from 'express';
import {PrismaClient} from '@prisma/client';
import {body, validationResult} from 'express-validator';

const server = express();

/**
 * API method save referral
 */
server.post('/api/v1/save-referral',
	body('addressUserFrom').isString(),
	// password must be at least 5 chars long
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
		result.push({address: row.addressUserFrom, attracted: row._count.addressUserTo, Profit: row._sum.cost})
	})

	res.send(result);
});

console.log(`
  You can navigate by url http://localhost:8080
`);

server.listen(8080);

