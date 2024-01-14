// Swagger Docs
const swgDocs = require("swagger-jsdoc");

const m2s = require("mongoose-to-swagger");
const UserSchema = require("../models/User");

const m2sOptions = {
  omitFields: ["createdAt", "updatedAt", "reminderCount", "subscription"],
};

const swaggerUserSchema = m2s(UserSchema, m2sOptions);

const swaggerDocs = swgDocs({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Birthday Reminder MERN API",
      version: "1.0.0",
      contact: {
        email: "andreicomanescuonline@gmail.com",
        name: "axense234",
        url: "https://github.com/axense234",
      },
      description:
        "The documentation for the Birthday Reminder MERN API using swagger-ui-express and swagger-jsdoc.",
      license: {
        name: "GNU",
        url: "https://github.com/axense234/Birthday-Reminder-MERN/blob/master/LICENSE.md",
      },
    },
    servers: [{ url: `http://localhost:${process.env.PORT || 4000}` }],
    components: {
      schemas: {
        User: swaggerUserSchema,
        Profile: {
          properties: {
            id: {
              type: "string",
            },
          },
        },
        Login: {
          properties: {
            username: {
              type: "string",
            },
            email: {
              type: "string",
              format: "email",
            },
            password: {
              type: "string",
            },
          },
        },
        Reminder: {
          properties: {
            reminderBirthday: {
              type: "string",
            },
            reminderName: {
              type: "string",
            },
            reminderImageUrl: {
              type: "string",
              format: "url",
            },
          },
        },
        CreateReminder: {
          properties: {
            reminder: {
              $ref: "#components/schemas/Reminder",
            },
            profile: {
              $ref: "#components/schemas/Profile",
            },
          },
        },
      },
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
        },
      },
    },
    securityDefinitions: {
      bearerAuth: {
        type: "apiKey",
        scheme: "bearer",
        in: "header",
        name: "Authorization",
      },
    },
  },
  apis: ["./docs/*.yaml"],
});

module.exports = swaggerDocs;
