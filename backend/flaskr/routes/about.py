from flask import Blueprint
from flask import jsonify

from flaskr import db
from flaskr.models.about import About, AboutSchema

bp = Blueprint("about", __name__)

@bp.route("/about")
def about():
    about = get_about_data();
    return jsonify(about), 200

#SQL FUNCTIONS
def get_about_data():
    #tmp = HoroscopeType.query.all()
    #horoscope_types_schema = HoroscopeTypeSchema(many=True)
    #horoscope_types = horoscope_types_schema.dump(tmp)
    about = About.query.all()
    about_schema = AboutSchema(many=True)
    return about_schema.dump(about)


