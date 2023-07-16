from flask import Blueprint
from flask import request
from flask import jsonify


from flaskr.models.humor import Humor, HumorSchema

bp = Blueprint("humor_pump", __name__)

#ROUTES

@bp.route("/humor-pump", methods=['GET'])
def humor_pump():
    page = request.args.get('page')
    
    try: 
        page = int(page)
    except: 
        page = 1
    humor = get_humor(page)

    return jsonify(humor), 200

#SQL FUNCTIONS

def get_humor(page):
    page -= 1
    humor = Humor.query.all()
    #count = tmp.count()
    #blohs = tmp.offset(blohs_per_page*page).limit(blohs_per_page)
    humor_schema = HumorSchema(many=True)
    return humor_schema.dump(humor)
