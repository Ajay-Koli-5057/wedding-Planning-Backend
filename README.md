# Wedding Planning Task Manager

## Project Overview

This project is a backend designed to help manage wedding planning tasks. The backend is built with NestJS, PostgreSQL, and TypeORM. wedding party management, and task management Api created. The project also integrates with ChatGPT for enhanced functionality.

## Installation

Follow these steps to set up the project:

1. **Initialize the NestJS Project**

    ```bash
    npx nest new wedding-planning
    cd wedding-planning
    ```

2. **Install Required Dependencies**

    ```bash
    npm install @nestjs/typeorm typeorm pg
    npm install @nestjs/config
    npm install axios
    npm install class-validator class-transformer
    npm install --save-dev @nestjs/testing
    npm install openai
    ```

3. **Set Up Environment Variables**

    Create a `.env` file in the root directory of your project and add the following environment variables:

    ```dotenv
    DB_HOST=localhost
    DB_PORT=5432
    DB_USERNAME=your_db_username
    DB_PASSWORD=your_db_password
    DB_DATABASE=wedding_planner_db
    OPENAI_API_KEY=your_openai_api_key
    ```

## Configuration

- **Database Configuration**: The application connects to a PostgreSQL database using TypeORM. Update the `.env` file with your database credentials.

- **ChatGPT Integration**: The application uses the OpenAI API for certain features. Ensure the `OPENAI_API_KEY` environment variable is set with your OpenAI API key.



## Technical Issue

### Third-Party Charges from OpenAI

**Issue:**
OpenAI has introduced charges for their API services, which may impact the cost of using their features within this project.

**Action Plan:**
1. **Review Pricing:** Visit the [OpenAI Pricing](https://openai.com/pricing) page to understand the new cost structure.
2. **Assess Usage:** Evaluate how this pricing change affects your project’s budget and usage.
3. **Optimize Usage:** Look for ways to optimize API calls to minimize costs.
4. **Explore Alternatives:** Consider alternative APIs or services if the costs are prohibitive.
5. **Update Documentation:** Adjust any related documentation if there are changes to how you use OpenAI services.
6. **Budget Adjustments:** Reevaluate your project's budget to account for these new costs.

## Development

To run the development server, use the following command:

```bash
npm run start:dev
```
