show databases;
use world;
show tables;

# 1.
select Name, Population
from country
where Population > (select Population
								from country
								where Name='Mexico')
order by Population desc;
                        
                        
# 2.
select country.name, count(country.code) as count
from country
left join city
on country.Code = city.CountryCode
group by country.code
order by count desc
limit 10;


# 3.
select Language, round(sum(Percentage*Population)) as count
from countrylanguage
left join country
on countrylanguage.CountryCode = country.Code
group by Language
order by count desc
limit 10;


# 4.
select city_name, CountryCode, country_name, percentage
from
(
	select city.Name as city_name, city.CountryCode as CountryCode, country.Name as country_name, 
				round((city.Population/country.Population)*100,2) as percentage, city.Population as Population
	from city
	left join country
	on city.CountryCode = country.Code
	having percentage >= 10
) as bigcity
where Population>5000000
order by percentage desc;


# 5.
select dense_city.name, count(countrylanguage.Language) as language_count
from
(
	select code, name, round((Population/SurfaceArea),0) as density
	from country
	where SurfaceArea>=10000
	having density >= 200
	order by density desc
) as dense_city
left join countrylanguage
on dense_city.code = countrylanguage.CountryCode
group by dense_city.code
having language_count>=5
order by language_count desc, name ;


# 6.
create view temp1 as
select CountryCode, count(Language) as language_count, group_concat(Language) as languages
from countrylanguage
group by CountryCode
having language_count<=3;

create view temp2 as
select city.CountryCode as countrycode, city.name as city_name, city.Population, language_count, languages
from temp1
join city
on city.CountryCode = temp1.CountryCode
having Population>3000000;

select countrycode, city_name, temp2.Population, country.Name as country_name, language_count, languages
from temp2
join country
on temp2.countrycode = country.Code
order by temp2.Population desc;
















