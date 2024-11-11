SELECT 
  c.id, 
  c.name, 
  c.logo, 
  c.color
FROM 
  season_constructor sc
JOIN constructor c ON sc.constructor_id = c.id
WHERE sc.year = $1
ORDER BY position_number ASC;