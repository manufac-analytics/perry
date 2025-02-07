import { faker } from "@faker-js/faker";
import { range } from "d3-array";
import { addDays } from "date-fns";
faker.seed(1);
// Ref: https://github.com/manufac-analytics/boutique/blob/main/src/FootprintChart/index.stories.tsx#L28
// eslint-disable-next-line import/no-unused-modules
export function generateSampleCandleStickData(count) {
    const startDate = new Date(2023, 0, 1);
    const output = range(count).map((ele) => {
        const clusters = range(Math.round(Math.random() * 10 + 4)).map(() => {
            const sell = faker.number.int({ min: 100, max: 10000 });
            const buy = faker.number.int({ min: 100, max: 10000 });
            const price = faker.number.float({ min: 1000, max: 10000 });
            return {
                sell,
                buy,
                price,
                volume: buy + sell,
            };
        });
        const sortedClusters = [...clusters].sort((a, b) => b.price - a.price);
        return {
            open: clusters[0].price,
            close: clusters[clusters.length - 1].price,
            low: sortedClusters[sortedClusters.length - 1].price,
            high: sortedClusters[0].price,
            date: addDays(startDate, ele).toLocaleDateString(),
            volume: clusters.reduce((acc, { volume }) => acc + volume, 0),
        };
    });
    return output;
}
//# sourceMappingURL=dev-utils.js.map