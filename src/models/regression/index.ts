import { RandomForestRegression } from "ml-random-forest";
import MultivariateLinearRegression from "ml-regression-multivariate-linear";
// import { kombi } from "kombi";
import data from "./WineQualityDataSetRed.json";

const rootMeanSquareError = (predicted: number[], observed: number[]) => {
  const predictedMatrix = predicted.map((el) => Number.parseInt(el, 10));
  let sum = 0;
  for (let i = 0; i < predictedMatrix.length; i++) {
    const squareError = Math.pow(predictedMatrix[i] - observed[i], 2);
    sum += squareError;
  }
  return Math.sqrt(sum / predictedMatrix.length);
}

const calculateSuccessPercentage = (predicted: string[], observed: number[]) => {
  const predictedMatrix = predicted.map((el) => Number.parseInt(el, 10));
  let successCount = 0;
  for (let i = 0; i < predictedMatrix.length; i++) {
    const squareError = predictedMatrix[i] - observed[i];
    if ( squareError === 0){
      successCount++;
    }
  }
  return (successCount / predictedMatrix.length) * 100;
}

const inputs = data.map((el) => Object.values(el).slice(0,-1));
const outputs = data.map((el) => el.quality);
const TRAINING_LENGTH = data.length * 60 / 100; // 90 % of the whole data
const trainX = inputs.slice(0, TRAINING_LENGTH);
const trainY = outputs.slice(0, TRAINING_LENGTH);
const predictX = inputs.slice(TRAINING_LENGTH);
const predictY = outputs.slice(TRAINING_LENGTH);

// MultivariateLinearRegression
const arrayTrainY = trainY.map((el) => [el]); // needed because MultivariateLinearRegression contains multiple dependent and independent variables
let startTime = Date.now();
const MVLRModel = new MultivariateLinearRegression(trainX, arrayTrainY);
const MVLRPredictions = MVLRModel.predict(predictX).map(([el]) => Math.floor(el));
let endTime = Date.now();
console.log(`Execution Time:  ${(endTime - startTime).toString()} ms`);
console.log(rootMeanSquareError(MVLRPredictions, predictY));
console.log("Success Percentage:" + calculateSuccessPercentage(MVLRPredictions, predictY));


// RandomForestRegressions
const options = {
  maxFeatures: 11,
  replacement: false,
  nEstimators: 500,
  treeOptions: {
    maxDepth: 10,
  }
};
const RFRModel = new RandomForestRegression(options);
startTime = Date.now();
RFRModel.train(trainX, trainY);
const RFRPredictions = RFRModel.predict(predictX).map(([el]) => Math.floor(el));
endTime = Date.now();
console.log(`Execution Time:  ${(endTime - startTime).toString()} ms`);
console.log(rootMeanSquareError(RFRPredictions, predictY));
console.log("Success Percentage:" + calculateSuccessPercentage(RFRPredictions, predictY));
