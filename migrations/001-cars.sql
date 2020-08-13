--Up
CREATE TABLE FAQ(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT,
    answer TEXT,
    createDate DATE
);
INSERT INTO FAQ (question, answer, createDate)
values(
        'How to be safe buying online?',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo',
        DATE('2019-11-01')
    );
INSERT INTO FAQ (question, answer, createDate)
values(
        'Do I have any assurance on my new car?',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo',
        DATE('2020-11-01')
    );
INSERT INTO FAQ (question, answer, createDate)
values(
        'How many kilometers a normal car can have?',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo',
        DATE('2018-11-01')
    );
INSERT INTO FAQ (question, answer, createDate)
values(
        'What is the best month to buy a car?',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo',
        DATE('2018-11-01')
    );
INSERT INTO FAQ (question, answer, createDate)
values(
        'How to know the car history?',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo',
        DATE('2018-11-01')
    );
INSERT INTO FAQ (question, answer, createDate)
values(
        'How much do I pay a month to use the service?',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo',
        DATE('2018-11-01')
    );
CREATE TABLE Car (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    make TEXT,
    model TEXT,
    year INTEGER,
    fuelType TEXT,
    kilometers INTEGER,
    details TEXT,
    price INTEGER,
    photoUrl TEXT
);
INSERT INTO Car (
        make,
        model,
        year,
        kilometers,
        fuelType,
        price,
        photoUrl,
        details
    )
values(
        'Audi',
        'A2',
        2003,
        123456,
        'Petrol',
        8199,
        '/photos/cars/audi-a2-2003-8199.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
INSERT INTO Car (
        make,
        model,
        year,
        kilometers,
        fuelType,
        price,
        photoUrl,
        details
    )
values(
        'BMW',
        '116',
        2013,
        1231231,
        'Petrol',
        12999,
        '/photos/cars/bmw-116-d-line-urban-2013.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
INSERT INTO Car (
        make,
        model,
        year,
        kilometers,
        fuelType,
        price,
        photoUrl,
        details
    )
values(
        'BMW',
        '320',
        2009,
        655656,
        'Petrol',
        18999,
        '/photos/cars/bmw-320-2009-18000.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
INSERT INTO Car (
        make,
        model,
        year,
        kilometers,
        fuelType,
        price,
        photoUrl,
        details
    )
values(
        'BMW',
        'x1',
        2012,
        565656,
        'Diesel',
        24000,
        '/photos/cars/bmw-x1-2012-24999.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
INSERT INTO Car (
        make,
        model,
        year,
        kilometers,
        fuelType,
        price,
        photoUrl,
        details
    )
values(
        'Ford',
        'Fiesta',
        2008,
        433444,
        'Petrol',
        5590,
        '/photos/cars/ford-fiesta-2008-5950.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
INSERT INTO Car (
        make,
        model,
        year,
        kilometers,
        fuelType,
        price,
        photoUrl,
        details
    )
values(
        'Ford',
        'Fiesta',
        2014,
        343434,
        'Petrol',
        9950,
        '/photos/cars/ford-fiesta-2014-9950.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
INSERT INTO Car (
        make,
        model,
        year,
        kilometers,
        fuelType,
        price,
        photoUrl,
        details
    )
values(
        'Mazda',
        '6',
        2015,
        343411,
        'Petrol',
        21000,
        '/photos/cars/mazda-6-2015.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
INSERT INTO Car (
        make,
        model,
        year,
        kilometers,
        fuelType,
        price,
        photoUrl,
        details
    )
values(
        'Merces-Benz',
        '200',
        2015,
        111111,
        'Petrol',
        24999,
        '/photos/cars/mercedes-benz-200-2015-24999.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
INSERT INTO Car (
        make,
        model,
        year,
        kilometers,
        fuelType,
        price,
        photoUrl,
        details
    )
values(
        'Merces-Benz',
        'e250',
        2011,
        123443,
        'Diesel',
        29800,
        '/photos/cars/mercedes-benz-e250-2011-29800.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
INSERT INTO Car (
        make,
        model,
        year,
        kilometers,
        fuelType,
        price,
        photoUrl,
        details
    )
values(
        'Peugeot',
        '3008',
        2014,
        77000,
        'Petrol',
        18999,
        '/photos/cars/peugeot-3008-2014-17999.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
INSERT INTO Car (
        make,
        model,
        year,
        kilometers,
        fuelType,
        price,
        photoUrl,
        details
    )
values(
        'Renault',
        'Clio',
        2017,
        123133,
        'Diesel',
        13485,
        '/photos/cars/renault-clio-2017-13485.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
INSERT INTO Car (
        make,
        model,
        year,
        kilometers,
        fuelType,
        price,
        photoUrl,
        details
    )
values(
        'Renault',
        'Espace',
        2004,
        123123,
        'Petrol',
        9800,
        '/photos/cars/renault-espace-2004.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
INSERT INTO Car (
        make,
        model,
        year,
        kilometers,
        fuelType,
        price,
        photoUrl,
        details
    )
values(
        'Renault',
        'Megane IV',
        2016,
        123123,
        'Diesel',
        15890,
        '/photos/cars/renault-megane-2016-15890.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
INSERT INTO Car (
        make,
        model,
        year,
        kilometers,
        fuelType,
        price,
        photoUrl,
        details
    )
values(
        'Seat',
        'Leon',
        2010,
        44444,
        'Diesel',
        13650,
        '/photos/cars/seat-leon-2010-13650.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
INSERT INTO Car (
        make,
        model,
        year,
        kilometers,
        fuelType,
        price,
        photoUrl,
        details
    )
values(
        'Smart',
        'for two',
        2008,
        5534,
        'Diesel',
        5800,
        '/photos/cars/smart-fortwo-2008-5800.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
INSERT INTO Car (
        make,
        model,
        year,
        kilometers,
        fuelType,
        price,
        photoUrl,
        details
    )
values(
        'Smart',
        'for two',
        2012,
        43434,
        'Diesel',
        7950,
        '/photos/cars/smart-fortwo-2012-7950.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
INSERT INTO Car (
        make,
        model,
        year,
        kilometers,
        fuelType,
        price,
        photoUrl,
        details
    )
values(
        'Smart',
        'for two',
        2003,
        343434,
        'Diesel',
        8850,
        '/photos/cars/smart-fortwo-passion-2003-8888.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
INSERT INTO Car (
        make,
        model,
        year,
        kilometers,
        fuelType,
        price,
        photoUrl,
        details
    )
values(
        'Smart',
        'for two',
        2015,
        343434,
        'Diesel',
        11500,
        '/photos/cars/smart-fortwo-passion-2015-11500.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
INSERT INTO Car (
        make,
        model,
        year,
        kilometers,
        fuelType,
        price,
        photoUrl,
        details
    );
values(
        'Volkswagen',
        'EOS',
        2008,
        343434,
        'Diesel',
        14700,
        '/photos/cars/volkswagen-eos-2008-14700.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
INSERT INTO Car (
        make,
        model,
        year,
        kilometers,
        fuelType,
        price,
        photoUrl,
        details
    )
values(
        'Volkswagen',
        'Golf',
        2013,
        123123,
        'Diesel',
        18300,
        '/photos/cars/volkswagen-golf-2013-18300.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
INSERT INTO Car (
        make,
        model,
        year,
        kilometers,
        fuelType,
        price,
        photoUrl,
        details
    )
values(
        'Volkswagen',
        'Tiguan',
        2007,
        1231234,
        'Petrol',
        14299,
        '/photos/cars/volkswagen-tiguan-2007-14299.jpg',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    );
-- Down
DROP TABLE Car;
DROP TABLE FAQ;