

		function random0To60(){
				let seed = Date.now();

				seed = (seed * 9301 + 49297) % 233280;

				let randomNumber = Math.floor((seed / 233280) * 61);
				console.log("Number :- ", randomNumber);
			    console.log(" to present their solution");
				return randomNumber;

			}