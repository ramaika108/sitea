from flaskr import db, ma

class About(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    body = db.Column(db.String)
    href = db.Column(db.String)
    __tablename__ = "about"

    def __repr__(self):
        return '<About %s>' % self.title

class AboutSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'body', 'href')

