SELECT r.round, gp.name
FROM race r
JOIN grand_prix gp ON r.grand_prix_id = gp.id
WHERE r.year = $1