SELECT DISTINCT
  c.id, 
  c.name, 
  c.logo, 
  c.color
FROM 
  season_constructor sc
JOIN constructor c ON sc.constructor_id = c.id
WHERE ($1::INT IS NULL OR sc.year = $1)
AND LOWER(c.name) LIKE '%' || $2 || '%'
ORDER BY c.name ASC;