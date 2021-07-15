export interface Measure {
    value: number;
    units: string;
}

export interface MeasureRange {
    min: Measure;
    max: Measure;
}

export interface TemperaturPressureCombo {
    temperature: Measure;
    pressure: Measure;
}

export interface MolarWaterLoss {
    waterMoles: number;
    temperature: Measure;
}

