import React from 'react';
import image1 from '../graphImages/image1.png';
import image2 from '../graphImages/image2.png';

const Analysis = () => {
  return (
    <div className="bg-black min-h-screen p-8 text-white">
      <div className="container mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
        {/* Variance Inflation Factors Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Variance Inflation Factors after dropping high correlation features:</h2>
          <table className="min-w-full bg-gray-700 border border-gray-600">
            <thead>
              <tr>
                <th className="border-b py-2 px-4 text-left">Feature</th>
                <th className="border-b py-2 px-4 text-left">VIF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b py-2 px-4">CO2_Emissions</td>
                <td className="border-b py-2 px-4">4.704488</td>
              </tr>
              <tr>
                <td className="border-b py-2 px-4">Tesla_Open</td>
                <td className="border-b py-2 px-4">5.748051</td>
              </tr>
              <tr>
                <td className="border-b py-2 px-4">Tesla_Volume</td>
                <td className="border-b py-2 px-4">2.110333</td>
              </tr>
              <tr>
                <td className="border-b py-2 px-4">Coal</td>
                <td className="border-b py-2 px-4">7974.345080</td>
              </tr>
              <tr>
                <td className="border-b py-2 px-4">Distillate</td>
                <td className="border-b py-2 px-4">8.082451</td>
              </tr>
              <tr>
                <td className="border-b py-2 px-4">Propane</td>
                <td className="border-b py-2 px-4">6.897548</td>
              </tr>
              <tr>
                <td className="border-b py-2 px-4">Electricity</td>
                <td className="border-b py-2 px-4">3.696600</td>
              </tr>
              <tr>
                <td className="border-b py-2 px-4">Electricity_Price</td>
                <td className="border-b py-2 px-4">2.410277</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* OLS Regression Results Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">OLS Regression Results</h2>
          <pre className="bg-gray-700 p-4 rounded overflow-x-auto">
            {`
                            OLS Regression Results                            
==============================================================================
Dep. Variable:                  Sales   R-squared:                       0.912
Model:                            OLS   Adj. R-squared:                  0.904
Method:                 Least Squares   F-statistic:                     102.7
Date:                Wed, 24 Jul 2024   Prob (F-statistic):           6.11e-34
Time:                        20:28:11   Log-Likelihood:                -1.9785
No. Observations:                  77   AIC:                             19.96
Df Residuals:                      69   BIC:                             38.71
Df Model:                           7                                         
Covariance Type:            nonrobust                                         
=====================================================================================
                        coef    std err          t      P>|t|      [0.025      0.975]
-------------------------------------------------------------------------------------
CO2_Emissions         0.0009      0.001      1.464      0.148      -0.000       0.002
Tesla_Open            0.0949      0.009     10.397      0.000       0.077       0.113
Tesla_Volume       2.011e-09   8.15e-10      2.467      0.016    3.85e-10    3.64e-09
Coal                  2.7724      0.485      5.720      0.000       1.806       3.739
Distillate            0.0839      0.016      5.321      0.000       0.052       0.115
Propane              -0.1010      0.017     -5.876      0.000      -0.135      -0.067
Electricity          -0.1631      0.034     -4.790      0.000      -0.231      -0.095
Electricity_Price   -18.8831      9.911     -1.905      0.061     -38.656       0.890
==============================================================================
Omnibus:                        3.045   Durbin-Watson:                   2.177
Prob(Omnibus):                  0.218   Jarque-Bera (JB):                2.799
Skew:                           0.465   Prob(JB):                        0.247
Kurtosis:                       2.921   Cond. No.                     3.12e+10
==============================================================================

            `}
          </pre>
        </section>

        {/* Coefficient P-Values Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Coefficient P-Values</h2>
          <pre className="bg-gray-700 p-4 rounded overflow-x-auto">
            {`
                    Coefficient       P-Value
CO2_Emissions      9.435176e-04  1.476625e-01
Tesla_Open         9.490543e-02  9.138511e-16
Tesla_Volume       2.011325e-09  1.610153e-02
Coal               2.772351e+00  2.509018e-07
Distillate         8.392164e-02  1.213629e-06
Propane           -1.009660e-01  1.346673e-07
Electricity       -1.631402e-01  9.225718e-06
Electricity_Price -1.888305e+01  6.092367e-02
            `}
          </pre>
          <h3 className="text-xl font-semibold mt-4">Significant features based on p-value - 0.05:</h3>
          <ul className="list-none pl-10 mt-2">
            <li>Tesla_Open</li>
            <li>Tesla_Volume</li>
            <li>Coal</li>
            <li>Distillate</li>
            <li>Propane</li>
            <li>Electricity</li>
          </ul>
        </section>

        {/* Images Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Visualizations:</h2>
          <div className="flex flex-col items-center space-y-4">
            <img src={image1} alt="Image 1" className="w-full max-w-4xl rounded-lg shadow-md" />
            <img src={image2} alt="Image 2" className="w-full max-w-4xl rounded-lg shadow-md" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Analysis;
