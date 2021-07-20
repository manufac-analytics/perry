import {
  calculateDIPPRVaporPressure,
  DIPPRVaporPressureDictionary,
} from '../src/physical-and-chemical-data/data/vapor-pressure-constants';

describe('calculateDIPPRVaporPressure', () => {
  it('should return NaN outside the specified range of temperature', () => {
    const vaporProps = DIPPRVaporPressureDictionary['Acetaldehyde'];
    expect(
      calculateDIPPRVaporPressure(
        'Acetaldehyde',
        vaporProps.minimumTemperature - 1
      )
    ).toBe(NaN);
    expect(
      calculateDIPPRVaporPressure(
        'Acetaldehyde',
        vaporProps.maximumTemperature + 1
      )
    ).toBe(NaN);
  });
  it('should return correct vapor pressure at Tmin and Tmax', () => {
    const vaporProps = DIPPRVaporPressureDictionary['Acetaldehyde'];
    expect(
      calculateDIPPRVaporPressure(
        'Acetaldehyde',
        vaporProps.minimumTemperature
      ).toPrecision(3)
    ).toBe(vaporProps.pressureAtMinimumTemperature.toPrecision(3));
    expect(
      calculateDIPPRVaporPressure(
        'Acetaldehyde',
        vaporProps.maximumTemperature
      ).toPrecision(3)
    ).toBe(vaporProps.pressureAtMaximumTemperature.toPrecision(3));
  });
});
