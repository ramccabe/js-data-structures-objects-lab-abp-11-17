const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) = {
   const newObj = { ...obj };
};

    newObj[driver.name] = 'Sam';

    return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue (driver, key, value) {
  driver[key] = value;

  return driver;
}