const driver = {};

 function updateDriverWithKeyAndValue(driver, key, value) = {
   driver.name = { Sam };
}

function destructivelyUpdateDriverWithKeyAndValue (driver, key, value) {
  driver[key] = value;

  return driver;
}
