import PropTypes from 'prop-types';
export class Administrador {
    constructor(id, email, password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }

}

Administrador.propTypes = {
    id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
};
