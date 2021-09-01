import { StormGlass } from '@src/clients/StormGlass';
import stormGlassWeather3hoursFixtures from '@test/fixtures/stormGlass_whater_3_hours.json';
import stormGlassNormalizedWeather3hoursFixtures from '@test/fixtures/stormGlass_normalized_whater_3_hours.json';
import axios from 'axios';

describe('StormGlass client', () => {
    it('Should return normalized  forecast from stormGlas service', async () => {
        const lat = -33.792726;
        const lng = 151.298824;

        axios.get = jest.fn().mockResolvedValue({data: stormGlassWeather3hoursFixtures });

        const stormGlass = new StormGlass(axios);
        const response = await stormGlass.fetchPoints(lat,lng);
        expect(response).toEqual(stormGlassNormalizedWeather3hoursFixtures);
    });
});