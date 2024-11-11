SELECT DISTINCT ON (sd.position_number) d.first_name,
              d.id,
              d.last_name,
              d.abbreviation,
              d.permanent_number AS number,
              country.alpha2_code,
              c.name AS team,
              c.color AS team_color,
              c.logo AS team_logo
FROM season_driver sd
JOIN driver d ON sd.driver_id = d.id
JOIN season_entrant_driver sed ON sed.driver_id = d.id
AND sed.year = sd.year
JOIN
CONSTRUCTOR c ON c.id = sed.constructor_id
JOIN country ON country.id = d.nationality_country_id
WHERE sd.year = $1
  AND position_number IS NOT NULL
ORDER BY position_number ASC