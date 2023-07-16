from flaskr import db, ma

class Horoscope(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String)
    type = db.Column(db.String)
    __tablename__ = 'horoscope'

    def __repr__(self):
        return '<Horoscope %s>' % self.title

class HoroscopeSchema(ma.Schema):
    class Meta:
        fields = ('id', 'body', 'type')


class HoroscopeType(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String)
    __tablename__ = 'horoscope_tip'

    def __repr__(self):
        return '<Horoscope type %s>' % self.title

class HoroscopeTypeSchema(ma.Schema):
    class Meta:
        fields = ('id', 'body')

