<?php

// Composer: "fzaninotto/faker": "v1.3.0"
use Faker\Factory as Faker;

class ThingUrisTableSeeder extends Seeder {

	public function run()
	{
		echo 'ThingsUrisTableSeeder:
';
		$faker = Faker::create();
		$thingCount = DB::table('things')->count();

		echo 'seeding '.$thingCount.' Uris
';

		foreach(range(1, $thingCount) as $index)
		{

			$thingUri = new ThingUri();
			$thingUri->uri = $faker->url;
			$thingUri->save();

			$thing = Thing::find($index);
			$thingUri->thing()->save($thing);


		}
	}

}