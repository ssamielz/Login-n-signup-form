from flask import Flask, make_response
from flask_migrate  import Migrate
from flask_cors import CORS
from models import db, Admin, User
from requests import request
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
migrate = Migrate(app, db)
db.init_app(app)
CORS(app)

@app.route('/')
def index():
    return '<h1>Welcome to the home page</h1>'

@app.route('/admins', methods=['GET', 'POST'])
def admins():
    
    if request.method == 'GET':
        response_body = [admin.to_dict() for admin in Admin.query.all()]
        status_code = 200
        
    elif request.method == 'POST':
        new_admin = Admin(
            first_name= request.form.get('first_name'),
            last_name= request.form.get('last_name'),
            email= request.form.get('email'),
            password= generate_password_hash(request.form.get('password'))
        )
        db.session.add(new_admin)
        db.session.commit()
        response_body = {'message': 'You have successfully signed up'}
        status_code = 201
        
    return make_response(response_body, status_code)

def users():
    
    if request.method == 'GET':
        response_body = [user.to_dict() for user in User.query.all()]
        status_code = 200
        
    elif request.method == 'POST':
        new_admin = Admin(
            first_name= request.form.get('first_name'),
            last_name= request.form.get('last_name'),
            email= request.form.get('email'),
            password= generate_password_hash(request.form.get('password'))
        )
        db.session.add(new_admin)
        db.session.commit()
        response_body = {'message': 'You have successfully signed up'}
        status_code = 201
        
    return make_response(response_body, status_code)

@app.route('/admins/<string:email>')
def admins_by_email(email):
    admin = (Admin.query.filter(Admin.email == email).first()).to_dict()
    
    
    password = request.form.get('password')
    passwordsmatch = check_password_hash(admin.password, password)
    if passwordsmatch:
        response_body = {'message': f'Welcome to the site {admin.first_name}'}
        status_code = 200
    else:
        response_body = {'error': 'passwords do not match'}
        status_code = 404
    return make_response(response_body, status_code)

@app.route('/users/<string:email>')
def users_by_email(email):
    user = (User.query.filter(User.email == email).first()).to_dict()
    
    
    password = request.form.get('password')
    passwordsmatch = check_password_hash(user.password, password)
    if passwordsmatch:
        response_body = {'message': f'Welcome to the site {user.first_name}'}
        status_code = 200
    else:
        response_body = {'error': 'passwords do not match'}
        status_code = 404
    return make_response(response_body, status_code)

if __name__ == '__main__':
    app.run(port=5555, debug=True)