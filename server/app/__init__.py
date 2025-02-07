from flask import Flask
from .config import Config
from .models import db
from .routes import api

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)

    with app.app_context():
        db.create_all()  # Create database tables

    app.register_blueprint(api, url_prefix='/api')

    return app