import { RandomForestRegression } from "ml-random-forest";
import type { RandomForestBaseOptions } from "ml-random-forest";
import MultivariateLinearRegression from "ml-regression-multivariate-linear";
import { kombi } from "kombi";
import data from "./WineQualityDataSetRed.json";

const rootMeanSquareError = (predicted: number[], observed: number[]) => {
  let sum = 0;
  for (let i = 0; i < predicted.length; i++) {
    const squareError = Math.pow(predicted[i] - observed[i], 2);
    sum += squareError;
  }
  return Math.sqrt(sum / predicted.length);
}

const calculateSuccessPercentage = (predicted: number[], observed: number[]) => {
  let successCount = 0;
  for (let i = 0; i < predicted.length; i++) {
    const squareError = predicted[i] - observed[i];
    if (squareError === 0) {
      successCount++;
    }
  }
  return (successCount / predicted.length) * 100;
}

const inputs = data.map((el) => Object.values(el).slice(0, -1));
const outputs = data.map((el) => el.quality);
const TRAINING_LENGTH = data.length * 95 / 100; // 95 % of the whole data
const trainX = inputs.slice(0, TRAINING_LENGTH);
const trainY = outputs.slice(0, TRAINING_LENGTH);
const predictX = inputs.slice(TRAINING_LENGTH);
const predictY = outputs.slice(TRAINING_LENGTH);

// MultivariateLinearRegression
const arrayTrainY = trainY.map((el) => [el]); // needed because MultivariateLinearRegression contains multiple dependent and independent variables
let startTime = Date.now();
const MVLRModel = new MultivariateLinearRegression(trainX, arrayTrainY, { intercept: false, statistics: false });
const MVLRPredictions = MVLRModel.predict(predictX).map(([el]) => Math.round(el));
let endTime = Date.now();
console.log("MultivariateLinearRegression");
console.log(`Execution Time:  ${(endTime - startTime).toString()} ms`);
console.log("Root Mean Square Error:" + rootMeanSquareError(MVLRPredictions, predictY));
console.log("Success Percentage:" + calculateSuccessPercentage(MVLRPredictions, predictY));
console.log("-----");

// RandomForestRegressions

// hyperperameter combinations for random forest regression
const availableOptions: Record<keyof RandomForestBaseOptions, RandomForestBaseOptions[keyof RandomForestBaseOptions][]> = {
  maxFeatures: [9, 10, 11],
  replacement: [true, false],
  nEstimators: [500, 600, 700],
  seed: [42],
  useSampleBagging: [true, false],
  noOOB: [true, false],
  isClassifier: [false],
  selectionMethod: ["mean", "median"],
  treeOptions: [{ maxDepth: 100 }, { maxDepth: 200 }]
}
const hyperPerameterCombinations = kombi(availableOptions) as RandomForestBaseOptions[];
for (let i = 0; i < hyperPerameterCombinations.length; i += 1) {
  console.log(`Iteration ${i} of ${hyperPerameterCombinations.length}`);
  const currentOptions = hyperPerameterCombinations[i];
  console.log(JSON.stringify(currentOptions, undefined, 2));
  const currentRFRModel = new RandomForestRegression(currentOptions);
  const startTime = Date.now();
  currentRFRModel.train(trainX, trainY);
  const endTime = Date.now();
  const cuurentRFRPredictions = currentRFRModel.predict(predictX).map((el) => Math.round(el));
  console.log("Root Mean Square Error:" + rootMeanSquareError(cuurentRFRPredictions, predictY));
  console.log("Success Percentage:" + calculateSuccessPercentage(cuurentRFRPredictions, predictY));
  console.log(`Training Time:  ${((endTime - startTime) / (60 * 1000)).toString()} minutes`);
  console.log("-----");
}