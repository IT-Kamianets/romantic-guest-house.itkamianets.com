import fs from 'fs';
import path from 'path';
import https from 'https';

const root = process.cwd();

const manifest = [
	{
		output: 'assets/img/romantic-guest-house/hero/hero-01.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/723879564.jpg?a=2195102&k=dbd1e7ef897f76abb78957a3f736bb0bfe2e60ecf09d36ad6431810becb5413e&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/hero/hero-02.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/254215454.jpg?a=2195102&k=019c67808c12d4db4b45f7f26df9a94262bf6415a2bda52b8176bda3447ab98a&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/deluxe-king/dk-01.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/288656223.jpg?a=2195102&k=12655e47abe55ce21db420bc9ff8c361fd125af77a304b6a780fc0d959462422&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/deluxe-king/dk-02.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/260814824.jpg?a=2195102&k=bb39f4695f8c540fb5361ea46df728f895f5db1a3f3681a95ebf937c00d8803e&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/deluxe-king/dk-03.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/260814939.jpg?a=2195102&k=6b7467bde414d62bd24a445e3d3847e7338f51442e107509cadaa100750bfa67&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/deluxe-king/dk-04.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/260814874.jpg?a=2195102&k=ebe567316df8f8104876139fabfb0d8854da41a8b29dfdbc10eaf4672e9a2838&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/deluxe-king/dk-05.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/107540955.jpg?a=2195102&k=4f2af6119fc60f12e494fd9154fe54ac42ad362bc2859eb7328cf0b0dff6722a&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/deluxe-king/dk-06.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/107540988.jpg?a=2195102&k=a80bda0ebef0cde86a1573b802535be74fd777935392b139112bc79c730b5163&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/deluxe-king/dk-07.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/107540959.jpg?a=2195102&k=09286dd3c7a47208416c22577f750f505e7cb39b246ba721138c196f95523893&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/deluxe-king/dk-08.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/107541001.jpg?a=2195102&k=17aa16ddd1f11a68f3efc8b178dfbeaf6d1a4c77ef9ca8e604bad5755229a708&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/deluxe-king/dk-09.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/107540951.jpg?a=2195102&k=ac25983d54324ccae0a4f299a46cfdbd1624ff89d7b2ba67b012299dd434032e&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/deluxe-king/dk-10.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/107540964.jpg?a=2195102&k=39877ad59307ec99d7aae4b1c2e02c63e75cd64e83c2c9605b7387b307e94efd&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/deluxe-king/dk-bath-01.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/107541017.jpg?a=2195102&k=2714b93747bf3f5c9db49fc5cf91032eb5e5d849edd20d1b7300675e74997688&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/deluxe-king/dk-bath-02.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/107540980.jpg?a=2195102&k=7dc8a66b68a8e4cbf63b2a06ecfaae9486df255ebb3486b5c96e7af4245a5f8b&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/deluxe-double/dd-01.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/288643385.jpg?a=2195102&k=f4dda1906845038260f5cb4535e5d56e276fc3eb0ca4254c40f5249a296fbc91&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/deluxe-double/dd-02.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/261012987.jpg?a=2195102&k=59ea0bc2b49942579a6ade95386906ae476257df8168391a0f748d3d1455a206&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/deluxe-double/dd-03.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/261009706.jpg?a=2195102&k=68392ce4ce1ed8288126d3fea36048ea6201a9e81d554469b99d48b8f9f1a051&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/deluxe-double/dd-04.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/261011469.jpg?a=2195102&k=c33642caf354dce978f9d3da4db281c5142dbec515e60eb00482cdcb2ceb3fef&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/deluxe-double/dd-bath-01.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/261010732.jpg?a=2195102&k=67912ba605be4059f54e6d37b622955babac5027388550b2f337afdf50e0d562&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/deluxe-double/dd-bath-02.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/261010290.jpg?a=2195102&k=fd29eb14ff1c2bb6dd70c54c677c0f22f8139e12662ff5b1568bd30c5bf13212&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/deluxe-double/dd-balcony-01.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/288653041.jpg?a=2195102&k=7f6fa64657f133342d92f7b39a2e1f3649e063d5a2fa4615b021606a03239821&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-01.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/288652017.jpg?a=2195102&k=352b6d003c5cadeb1c46e477349599025e77b729f0572e15457c34a5dd39ffe0&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-02.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/288652016.jpg?a=2195102&k=6cbceccbaef951522820d478f856f2637ffdba7559dd44d413a7cb043bea60c5&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-03.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/288651999.jpg?a=2195102&k=f95d34542717eda92a6a25820a2cd59dde18305ad30d69282b0c73ef1ad29c20&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-04.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/288651695.jpg?a=2195102&k=4358ae345ec49950f920f1400931be82f3fd934ae8177b6490a004f83864cc85&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-05.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/261009562.jpg?a=2195102&k=810c17efe1ee6e4e5bd82df6c7d3dbcfb8573d49d3591cf13e68e33aad02b40a&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-06.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/261011425.jpg?a=2195102&k=c4f2b7d67f9765537fb9f357cca5d8704a452dd75ed5b95c285f638c551eab3d&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-work-01.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/261011353.jpg?a=2195102&k=56ecb551ca12a8d30182b5a31bae33ded13269be0405221ef4e08366ad02deb7&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-view-01.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/261011394.jpg?a=2195102&k=31d1c96c5fc19b960f6d3515a0801c3421c98b84202a76d9589dd5c212fc645e&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/courtyard-chan/chan-01.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/183435639.jpg?a=2195102&k=03a7afa80d63ad45f4d5c6627ca196f5667060b85714451e3f4349af66f2f6d2&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/courtyard-chan/chan-02.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/183769143.jpg?a=2195102&k=456b90fc8e43ffa87c321fb1792178e466c6ddab23a2c6db3ff5c855e41a029c&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/courtyard-chan/chan-03.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/183769756.jpg?a=2195102&k=ba2faa43ddbd8991f9f6b09187ab5ab02398d08d25370834290f3d882bee3c89&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/courtyard-chan/chan-04.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/183769240.jpg?a=2195102&k=3522ebb7dedbe0ca1e685f44a1c4f629a22425629802237f26179c25842c283d&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/courtyard-chan/chan-05.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/183769301.jpg?a=2195102&k=e3d4740511d3dd235584a4a67988a7531ebd0a56fdfdb9342b7a0fd62514d64f&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/exterior/exterior-01.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/261013347.jpg?a=2195102&k=0c59f4cc41ccdff155d135d4c5f43094c2bcc94b37c463abd87ab9dc69ae0a35&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/exterior/exterior-02.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/261013347.jpg?a=2195102&k=0c59f4cc41ccdff155d135d4c5f43094c2bcc94b37c463abd87ab9dc69ae0a35&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/exterior/exterior-03.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/261013347.jpg?a=2195102&k=0c59f4cc41ccdff155d135d4c5f43094c2bcc94b37c463abd87ab9dc69ae0a35&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/exterior/garden-01.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/723879564.jpg?a=2195102&k=dbd1e7ef897f76abb78957a3f736bb0bfe2e60ecf09d36ad6431810becb5413e&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/exterior/garden-02.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/723879564.jpg?a=2195102&k=dbd1e7ef897f76abb78957a3f736bb0bfe2e60ecf09d36ad6431810becb5413e&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/details/wood-01.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/187527489.jpg?a=2195102&k=9067d0c6b3d60501c92069ee051d38ac26b68340219d9cf33e3b922e88f58c26&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/details/wood-02.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/187528143.jpg?a=2195102&k=6a63654b844d2990b88b0301eb47cc5877cfec52e4ca726c403c5a4b681f0fed&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/details/wood-03.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/187527765.jpg?a=2195102&k=a9d35e7c3c818e738afbb2faf873501563a41b518f0aec127fa57973ea21c2a6&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/details/wood-04.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/187528066.jpg?a=2195102&k=b49e5cfeb9448313a1621aa5f90db33f87a62632d4a49c2c52bf1d21560d43fb&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/details/wood-05.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/187528044.jpg?a=2195102&k=db7a1dcc30a5975db4953eef8bc1162f2f98e13eede77518a5603dbb3e353342&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/details/detail-01.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/122184021.jpg?a=2195102&k=027787fc6312af58548504ab8223ca2c7c3a0ed1abe6d7269af0c0bb5ae3a8bb&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/details/detail-02.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/107540993.jpg?a=2195102&k=48b56b143e86828e9c5d060a7d7e491e6f2723416f94455cbff3554f548d7e39&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/details/detail-03.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/723879075.jpg?a=2195102&k=b5898e7f2e9486b5d4ac631950f42363ac4028bf32fa915d1b7e58b1790761d8&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/details/detail-04.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/723878925.jpg?a=2195102&k=849f60165023272d9c0c8e9fbc4edc05336540ce45710457e9c2dbff3f2230ac&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/details/detail-05.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/723877819.jpg?a=2195102&k=b78bc4e117a93f55c0deef6c05a099e8f91aaeee243e19024b3dc78ddd8b0209&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-extra-01.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/288653338.jpg?a=2195102&k=3c407eddcf8da4f3b6362bc571ee7f17af560bebb310fc446b8ddb9d29f263ca&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-extra-02.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/123696851.jpg?a=2195102&k=57341bd09d08167e998c9cf4002c538e82b96f738a91e297f1050185495d97a7&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-extra-03.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/123696874.jpg?a=2195102&k=6dd2bd14a6c4eb42fe8de5cbf727d74086c96c16e1edcd4d01578d90515cfc07&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-extra-04.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/132967487.jpg?a=2195102&k=eb7a5fc0dd4af461e16585136461ee4d7ed46a0ec011c8613cf56ddd347b8f30&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-extra-05.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/132970675.jpg?a=2195102&k=81c70f62b7fc39002bb8c64a8a2e787a21677c89f7c0b9799056e28646a59b62&o=',
	},
	{
		output: 'assets/img/romantic-guest-house/rooms/apartment-balcony/ab-extra-06.jpg',
		url: 'https://q-xx.bstatic.com/xdata/images/hotel/max500/132971227.jpg?a=2195102&k=ec289360dfc99caae3439fafaddadd1f278b09cf45875b08cad37345fcba8cdc&o=',
	},
];

const maxRedirects = 5;

const download = (url, dest, redirects = 0) =>
	new Promise((resolve, reject) => {
		const tempPath = `${dest}.partial`;
		const cleanupTemp = () => {
			if (fs.existsSync(tempPath)) {
				fs.unlinkSync(tempPath);
			}
		};

		const request = https.get(url, (response) => {
			const { statusCode, headers } = response;

			if (statusCode && statusCode >= 300 && statusCode < 400 && headers.location) {
				if (redirects >= maxRedirects) {
					reject(new Error(`Too many redirects for ${url}`));
					return;
				}
				const nextUrl = new URL(headers.location, url).toString();
				response.resume();
				download(nextUrl, dest, redirects + 1).then(resolve).catch(reject);
				return;
			}

			if (statusCode !== 200) {
				response.resume();
				reject(new Error(`Request failed (${statusCode}) for ${url}`));
				return;
			}

			const file = fs.createWriteStream(tempPath);
			response.pipe(file);

			file.on('finish', () => {
				file.close(() => {
					fs.rename(tempPath, dest, (err) => {
						if (err) reject(err);
						else resolve();
					});
				});
			});

			file.on('error', (err) => {
				cleanupTemp();
				reject(err);
			});
		});

		request.on('error', (err) => {
			cleanupTemp();
			reject(err);
		});
		request.setTimeout(20000, () => {
			request.destroy(new Error(`Timeout while downloading ${url}`));
		});
	});

const run = async () => {
	const failures = [];

	for (const entry of manifest) {
		const target = path.join(root, 'src', entry.output);
		await fs.promises.mkdir(path.dirname(target), { recursive: true });

		if (fs.existsSync(target)) {
			console.log(`skip: ${entry.output}`);
			continue;
		}

		let success = false;

		for (let attempt = 1; attempt <= 3; attempt += 1) {
			try {
				console.log(`download (${attempt}/3): ${entry.output}`);
				await download(entry.url, target);
				success = true;
				break;
			} catch (error) {
				console.warn(`failed (${attempt}/3): ${entry.output} - ${error.message}`);
			}
		}

		if (!success) {
			failures.push(entry.output);
		}
	}

	if (failures.length) {
		console.error('Download failures:');
		failures.forEach((file) => console.error(`- ${file}`));
		process.exitCode = 1;
	} else {
		console.log('All images downloaded.');
	}
};

run();
