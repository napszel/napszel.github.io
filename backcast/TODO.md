# Backcast TODO

Backcast was migrated from atom.hu to GitHub Pages in August 2026.

Current state:
- Static frontend is online under `/backcast/`.
- Old generated weather data is committed in `backcast/generated/weather_data.js`.
- Frontend is temporarily frozen to archive data around `2026-05-31`.
- Backend scripts are committed under `backcast/backend/`.
- Weather API key is NOT committed.

Temporary frontend changes:
- `ARCHIVE_BASE_DATE` is used in `backcast/javascript.js`.
- Missing future dates are skipped in `print_forecasts()`.

Future work:
- Recreate daily update using GitHub Actions.
- Store the weather API key as a GitHub Actions secret.
- Run the old backend scripts:
  - `backend/download_for_daily-saves.sh`
  - `backend/update_database.py`
  - `backend/generate_weather_data.py`
- Generate/update `backcast/generated/weather_data.js`.
- Commit updated `weather_data.js` automatically or publish it during deployment.
- Remove the `ARCHIVE_BASE_DATE` fallback from `javascript.js`.
- Remove the archive-mode missing-date guard in `print_forecasts()`.
