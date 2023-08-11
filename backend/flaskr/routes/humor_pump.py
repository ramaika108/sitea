from flask import Blueprint
from flask import request
from flask import jsonify

from flaskr.models.humor import Humor, HumorSchema

from flaskr.utils.calculate_total_pages import calculate_total_pages

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
puddles_per_page = 6
def get_humor(page):
    tmp = Humor.query
    total_pages, page = calculate_total_pages(tmp, puddles_per_page, page)

    puddles = tmp.offset(puddles_per_page*page).limit(puddles_per_page)
    puddles_schema = HumorSchema(many=True)
    return {'puddles': puddles_schema.dump(puddles), 'pagination': {'total': total_pages, 'current': page+1}}
