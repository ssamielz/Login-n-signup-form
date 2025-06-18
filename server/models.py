from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from datetime import datetime
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData()
db = SQLAlchemy(metadata=metadata)

class Admin(db.Model, SerializerMixin):
    __tablename__ = 'admins'
    
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    email =db.Column(db.String)
    password = db.Column(db.String)
    created_at = db.Column(db.DateTime, default=datetime.now())
    
    def __repr__(self):
        return f'<Admin {self.id} {self.first_name} {self.last_name} with {self.email}>'
    
class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String)
    last_name = db.Column(db.String)
    email =db.Column(db.String)
    password = db.Column(db.String)
    created_at = db.Column(db.DateTime, default=datetime.now())
    
    def __repr__(self):
        return f'<User {self.id} {self.first_name} {self.last_name} with {self.email}>'