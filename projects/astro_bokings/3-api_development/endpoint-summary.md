# Astro Bookings Supplier API Endpoints

1. **POST /api/v1/auth/login**
   - Authenticate a supplier and receive an access token

2. **GET /api/v1/rockets**
   - Retrieve all rockets for the authenticated supplier

3. **POST /api/v1/rockets**
   - Add a new rocket to the supplier's fleet

4. **PUT /api/v1/rockets/{rocketId}**
   - Update specifications of an existing rocket

5. **GET /api/v1/launches**
   - Retrieve all scheduled launches for the supplier

6. **POST /api/v1/launches**
   - Schedule a new rocket launch

7. **PUT /api/v1/launches/{launchId}**
   - Update details of an existing launch

8. **PUT /api/v1/launches/{launchId}/status**
   - Update the status of a launch (e.g., delay or abort)

9. **GET /api/v1/launches/{launchId}/bookings**
   - Retrieve all bookings for a specific launch

10. **GET /api/v1/launches/{launchId}/passenger-manifest**
    - Generate a passenger manifest for a specific launch

11. **GET /api/v1/financial-reports**
    - Retrieve financial reports for the supplier's launches
