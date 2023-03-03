"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoPropertyValidation = void 0;
const ValidationException_1 = require("../../../exceptions/ValidationException");
class TodoPropertyValidation {
    constructor(todo) {
        this.todo = todo;
        this.propertiesValidation();
    }
    /**
     * Validation des propriétés d'une todo
     */
    propertiesValidation() {
        let key;
        for (key in this.todo) {
            switch (key) {
                // Identité
                case 'id':
                    this.identityPropertyValidation(this.todo[key]);
                    break;
                // Titre
                case 'title':
                    this.titlePropertyValidation(this.todo[key]);
                    break;
                // Description
                case 'description':
                    this.descriptionPropertyValidation(this.todo[key]);
                    break;
                // Status
                case 'status':
                    this.statusPropertyValidation(this.todo[key]);
                    break;
            }
        }
    }
    /**
     * Validation du l'identité
     * @param {string} id
     */
    identityPropertyValidation(id) {
        if (id.trim().length < 1) {
            throw new ValidationException_1.ValidationException('error on todo identification');
        }
    }
    /**
     * Validation du titre
     * @param {string} title
     */
    titlePropertyValidation(title) {
        if (title.trim().length < 3) {
            throw new ValidationException_1.ValidationException('title is mandatory');
        }
    }
    /**
     * Validation de le descrtion
     * @param {string} description
     */
    descriptionPropertyValidation(description) {
        if (description.trim().length < 0) {
            throw new ValidationException_1.ValidationException('description is mandatory');
        }
    }
    /**
     * Validation du status
     * @param  {boolean} status
     */
    statusPropertyValidation(status) {
        if (status === null) {
            throw new ValidationException_1.ValidationException('status is mandatory');
        }
    }
}
exports.TodoPropertyValidation = TodoPropertyValidation;
