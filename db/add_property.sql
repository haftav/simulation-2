insert into property (propname, propdescription, address, city, state, zip, image, loanamount, monthlymortgage, desiredrent, userid)
values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);

select * from property