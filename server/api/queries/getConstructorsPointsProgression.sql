SELECT
	c.name,
	c.color,
	gp.abbreviation,
	rcs.points
FROM race_constructor_standing rcs
JOIN race r ON r.id = rcs.race_id
JOIN grand_prix gp ON gp.id = r.grand_prix_id
JOIN constructor c ON c.id = rcs.constructor_id
WHERE r.year = $1
ORDER BY r.round