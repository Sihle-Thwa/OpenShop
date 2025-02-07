import os

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'sqlite:///site.db') #name of database
    SQLALCHEMY_TRACK_MODIFICATIONS = False