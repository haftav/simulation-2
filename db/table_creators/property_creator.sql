create table property (
    propid serial primary key,
    propname varchar(40),
    propdescription varchar(200),
    address varchar(200),
    city varchar(40),
    state varchar(20),
    zip varchar(40),
    image varchar(200),
    loanAmount decimal(20, 2),
    monthlyMortgage decimal(20, 2),
    desiredRent decimal(20, 2),
    userid varchar(20)
)

