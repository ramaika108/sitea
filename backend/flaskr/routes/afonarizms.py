from flask import Blueprint
from flask import request
from flask import jsonify

from flaskr import db
from flaskr.models.afonarizms import Afonarizm, AfonarizmSchema

from flaskr.utils.calculate_total_pages import calculate_total_pages 

bp = Blueprint("afonarizms", __name__)


@bp.route("/afonarizms")
def afonarizms():
    page = request.args.get('page')
    try: 
        page = int(page)
    except: 
        page = 1
    afonarizms = get_afonarizms(page)
    return jsonify(afonarizms), 200

#SQL FUNCTIONS
afonarizms_per_page = 6
def get_afonarizms(page):
    tmp = Afonarizm.query
    total_pages, page = calculate_total_pages(tmp, afonarizms_per_page, page)

    afonarizms = tmp.offset(afonarizms_per_page*page).limit(afonarizms_per_page)
    afonarizms_schema = AfonarizmSchema(many=True)
    return {'afonarizms':  afonarizms_schema.dump(afonarizms), 'pagination': {'total': total_pages, 'current': page + 1}}

