show databases;

use world;
show tables;

-- Intermediate
-- 올림, 반올림, 내림함수
-- 조건문: if, infull,case when then else end
-- date_format 
-- join: inner, left, right
-- union: full outer
-- sub-query
-- index: explain
-- view


select ceil(12.345*10)*0.01;

select percentage, ceil(percentage)
from countrylanguage;

select round(12.345, 1);

select percentage, round(percentage,0)
from countrylanguage;

select truncate(12.345, 2);

select percentage, truncate(percentage,0)
from countrylanguage;

-- 조건문
-- if: IF(조건, 참, 거짓)
# 도시에 인구가 100만이 넘으면 big city 그렇지 않으면 small city를 scale 컬럼에 출력

select name, population
from city
order by Population desc;

select name, population, if(Population>1000000, "big city", "small city") as scale
from city
order by Population desc;

select name, population, if(Population>1000000, "big city", "small city") as scale
from city
having scale = "small city"  # 여기서 where은 쿼리되지 않음
order by Population desc;

# ifnull : IFNULL(컬럼명, default 데이터)
# 독립연도가 없는 데이터를 0으로 출력
select IndepYear, ifnull(IndepYear,0)
from country;

# case when then else end
# 나라별로 인구가 10억이상 , 10억~1억, 1억 이하 = "b, m, s"

select name, population
, case 
		when population > 1000000000 then "b"
		when population > 100000000 then "m"
		else "s"
	end as  scale
from country
having scale = "m"
order by population desc;

use sakila;

# date_format
select amount, payment_date, date_format(payment_date,"%y-%m-%d") as monthly
from payment;

select amount, payment_date, date_format(payment_date,"%y-%m-%d") as monthly, sum(amount)
from payment
group by monthly;

select date_format(payment_date,"%y-%m-%d") as monthly, sum(amount)
from payment
group by monthly;



use test;

CREATE TABLE user (
user_id int(11) unsigned NOT NULL AUTO_INCREMENT,
name varchar(30) DEFAULT NULL,
PRIMARY KEY (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE addr (
id int(11) unsigned NOT NULL AUTO_INCREMENT,
addr varchar(30) DEFAULT NULL,
user_id int(11) DEFAULT NULL,
PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO user(name)
VALUES ("jin"),
("po"),
("alice"),
("petter");

INSERT INTO addr(addr, user_id)
VALUES ("seoul", 1),
("pusan", 2),
("deajeon", 3),
("deagu", 5),
("seoul", 6);

# JOIN : inner, left, outer
# UNION : full-outer

select * 
from user
join addr; # inner join

select * 
from user
join addr # inner join
on user.user_id = addr.user_id;

select user.user_id, user.name, addr.addr
from user
left join addr
on user.user_id = addr.user_id;

select user.user_id, user.name, addr.addr
from user
right join addr
on user.user_id = addr.user_id;


# UNION
select name
from user
UNION # 자동 중복제거 된다.
select addr
from addr;

select name
from user
UNION ALL # 중복제거기능 없앰
select addr
from addr;


select user.user_id, user.name, addr.addr
from user
left join addr
on user.user_id = addr.user_id
UNION 
select user.user_id, user.name, addr.addr
from user
right join addr
on user.user_id = addr.user_id;


# sub-query : select, from, where 절 등에서 사용이 가능하다.
use world;

# 전체 나라수, 도시수, 언어수를 하나의 row로 출력
select count(*) from country;
select count(*) from city;
select count(distinct(Language))
from countrylanguage;

# select sub-query
select
(select count(*) from country) as country_count,
(select count(*) from city) as city_count,
(select count(distinct(Language))
from countrylanguage) as language_count;

# from sub-query
# 800만 이상이 되는 도시의 국가코드 이름, 도시인구수를 출력
select CountryCode, name, Population
from city
where population > 8000000;


select city.CountryCode, city.name, country.name, city.Population
from city
join country
on city.CountryCode = country.code
having city.population > 8000000;

select city.CountryCode, city.name, country.name, city.Population
from (
select countryCode, name, Population
from city
where Population>8000000
) as city
join country
on city.countryCode = country.code;


# where sub-query
# 800만 이상 도시의 국가코드, 국가이름, 대통령 이름을 출력	
select code, name, HeadOfState
from country;

select countrycode from city where Population>8000000;

select code, name, HeadOfState
from country
where code in (
select countrycode from city where Population>8000000
);

# index
use employees;
show tables;
desc salaries;


select *
from salaries
where salary>60000
order by salary
limit 1000;


# index
explain
select *
from salaries
where salary>60000
order by salary
limit 1000;


create index salaries #index 이름 
on salaries (salary); # table, column


# index
explain
select *
from salaries
where salary>60000
order by salary
limit 1000;

# index
select *
from salaries
where salary>60000
order by salary
limit 1000;


# index
explain
select *
from salaries
where salary>60000 and to_date > "2000-01-01"
order by salary
limit 1000;


select *
from salaries
where salary>60000 and to_date > "2000-01-01"
order by salary
limit 1000;


use world;

# view : 가상의 테이블 - 컬럼의 수정이나, 인덱스 설정같은 명령을 할 수 없다.
select country.code, country.name, city.name
from country
join city on country.code = city.CountryCode;

select *
from countrylanguage
join(
select country.code, country.name as country_name, city.name as city_name
from country
join city 
on country.code = city.CountryCode
) as s1
on s1.code = countrylanguage.countrycode;


select *
from countrylanguage
join code_name
on code_name.code = countrylanguage.countrycode;


create view code_name as
select country.code, country.name as country_name, city.name as city_name
from country
join city 
on country.code = city.CountryCode;












