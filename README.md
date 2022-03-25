# City Explorer API

**Author**: James Brooks
**Version**: 3.1.0

## Overview

This API draws data from three different APIs to provide data based upon a city in the US. It draws from the LocationIQ API to get location data based on a U.S City Name, with the top result being returned. It next draws from the WeatherBit API to provide a 3 day weather forcast based upon Latitude and Logitude. And finally, it draws from the MovieDB API to return a list of movies with a search query in the title. The problem domain for this API is to aid in the desire for information and curisoity.

## Getting Started

To get this API working you need `cors`, `dotenv`, `axios` and `express` installed as dependencies.
You also need within a `.env` file, API keys for LocationIQ, WeatherBit, and MovieDB.

## Architecture

This app uses Node, and Express at base; and uses the libraries of DotENV, Cors, Axios, and NodeMon.

## Change Log

- 03-22-2022 3:55pm - Initial Working File Commit.
- 03-22-2022 3:59pm - Set up server repository.
- 03-22-2022 5:30pm - Added functionality to API server.
- 03-23-2022 6:21pm - Made weather data live.
- 03-23-2022 8:20pm - Made movie data live.
- 03-23-2022 10:02pm - Deployed.
- 03-24-2022 3:20pm - Started Refactoring.
- 03-24-2022 4:13pm - Modularized Movie and Weather API Calls.
- 03-24-2022 6:06pm - Added WeatherIQ to server API.

## Credit and Collaborations

- Liesl White (Day01 WRRC Partner)
  - [LinkedIn](https://www.linkedin.com/in/lieslwhite/)
- Cole Gibbs (Day02 WRRC Partner)
  - [LinkedIn](https://www.linkedin.com/in/cole-gibbs/)
- Tanesha Brester (Day03 WRRC Partner)
  - [Linkedin](https://www.linkedin.com/in/taneshabrester/)
- Dwight Lindquist (Day04 WRRC Partner)
  - [LinkedIn](https://www.linkedin.com/in/dwight-lindquist-a9a0b6b4/)

## Additional Information

- Day 01:
  - ![Day01 WRRC Image](./data/imgs/WRCC%20Lab%2006.png)
- Day 02:
  - ![Day02 WRRC Image](./data/imgs/Lab%2007%20WRRC.png)
- Day 03:
  - ![Day03 WRRC Image](./data/imgs/Lab!08%20WRRC.png)
- Day 04:
  - ![Day04 WRRC Image](./data/imgs/Lab09%20WRRC.png)

## Time Estimation

>Name of feature: Set up Server Repository
>
>Estimate of time needed to complete: 5 Minutes
>
>Start time: 3:55pm
>
>Finish time: 3:59pm
>
>Actual time needed to complete: 4 Minutes

>Name of feature: Weather
>
>Estimate of time needed to complete: 45 Minutes to 1 Hour
>
>Start time: 3:59pm
>
>Finish time: 5:30pm
>
>Actual time needed to complete: 91 Minutes

>Name of feature: Weather(Live)
>
>Estimate of time needed to complete: 45 Minutes to 1 Hour
>
>Start time: 5:25pm
>
>Finish time: 6:21pm
>
>Actual time needed to complete: 56 Minutes

>Name of feature: Movies
>
>Estimate of time needed to complete: 45 Minutes to 1 Hour
>
>Start time: 7:30pm
>
>Finish time: 8:20pm
>
>Actual time needed to complete: 50 Minutes

>Name of feature: Deploy
>
>Estimate of time needed to complete: 5 Minutes
>
>Start time: 9:31pm
>
>Finish time: 10:02pm
>
>Actual time needed to complete: 31 Minutes

>Name of feature: Modularize The Back-End
>
>Estimate of time needed to complete: 1 Hour
>
>Start time: 3:20pm
>
>Finish time: 4:13pm
>
>Actual time needed to complete: 53 Minutes
