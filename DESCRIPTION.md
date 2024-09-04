1. static page - build static page with mock data, <repayment-calculator>
2. functional app - make static page functional with mock data, e.g. Pinia store to save UI inputs, repayment calculations, input validations, <base-input>, <base-select>, etc
3. Fetch data - make app talks to the server and persist data in Pinia store
4. style - more styling components came in place as more re-use of same code detected at this phase, e.g. <base-txt>, <base-row>, <calculator-input-group>, <calculator-select-group>, <calculator-row>, etc
5. TODO: add unit tests and e2e tests - low level js unit tests, render component interactive functional tests, e2e tests.