from flask import Blueprint
from flask import request
from flask import jsonify

from sqlalchemy import func
from flaskr.models.horoscope import Horoscope, HoroscopeSchema, HoroscopeType, HoroscopeTypeSchema

bp = Blueprint("horoscope", __name__)

#ROUTES

@bp.route("/horoscope", methods=['GET'])
def humor_pump():
    horoscope = get_horoscope()

    return jsonify(horoscope), 200

#SQL FUNCTIONS

def get_horoscope():
    #tmp = HoroscopeType.query.all()
    #horoscope_types_schema = HoroscopeTypeSchema(many=True)
    #horoscope_types = horoscope_types_schema.dump(tmp)
    horoscope_types = [
        {'name': 'weather', 'id': 1},
        {'name': 'mood', 'id': 2},
        {'name': 'breakfast', 'id': 3},
        {'name': 'lunch', 'id': 3},
        {'name': 'supper', 'id': 3},
        {'name': 'night', 'id': 3},
        {'name': 'tasks', 'id': 4},
        {'name': 'advise', 'id': 5},
        {'name': 'pokrov', 'id': 6},
    ]
    
    horoscope = Horoscope.query.order_by(func.random())
    horoscope_schema = HoroscopeSchema(many=True)
    result = {}
    for type in horoscope_types:
        tmp = horoscope.filter_by(type=type['id']).limit(1)
        result[type['name']] = horoscope_schema.dump(tmp)[0]['body']
    print(result)
        
    return result
