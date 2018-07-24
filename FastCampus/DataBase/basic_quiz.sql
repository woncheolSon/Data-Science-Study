use world;
show tables;

-- quiz1
-- 1.
select distinct Continent 
from country;

-- 2.
select Name,Population 
from city 
where CountryCode='KOR'  and Population>1000000 
order by Population desc;

-- 3.
select Name, CountryCode,Population 
from city 
where Population>=8000000 and Population<10000000 
order by Population desc;

-- 4.
select Code, concat(Name,"(",IndepYear,")") as NameIndep, Continent, Population
from country
where IndepYear between 1940 and 1950
order by IndepYear;

-- 5.
select * 
from countrylanguage 
where Language in ('Spanish', 'English', 'Korean') and Percentage > 95
order by Percentage desc;

-- 6.
select Code, Name, Continent, GovernmentForm, Population
from country
where Code like 'A%' and GovernmentForm like '%Republic';



-- quiz2.
-- 1.
select count(distinct Continent)
from country;

-- 2.
select Continent, count(Continent) as count
from country
group by Continent
order by count desc;

-- 3.
select CountryCode, sum(Population) as Population
from city
group by CountryCode
order by Population desc;

-- 4.
select Language, count(CountryCode) as count
from countrylanguage
group by Language
order by count desc
limit 4,6;

-- 5.
select Language, count(Language) as count
from countrylanguage
group by Language
having count>15
order by count desc;

-- 6.
select Continent, sum(SurfaceArea) as SurfaceArea
from country
group by Continent
order by SurfaceArea desc;
