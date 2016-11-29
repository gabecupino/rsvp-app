# [START imports]
import os
import urllib

from google.appengine.api import users
from google.appengine.ext import ndb

import jinja2
import webapp2

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)
# [END imports]

DEFAULT_CONFIRMATION_CODE = ''

def guestlist_key(confirmation_code=DEFAULT_CONFIRMATION_CODE):
    return ndb.Key('Guestlist', confirmation_code)


# [START party]
class Guest(ndb.Model):
    """Sub model for representing a person."""
    identity = ndb.StringProperty(indexed=False)
    email = ndb.StringProperty(indexed=False)
    attending = ndb.BooleanProperty(default=False)


##class Party(ndb.Model):
##    """A main model for representing a group of invited people."""
##    head = ndb.StructuredProperty(Person)
##    people = ndb.StructuredProperty(Person, repeated=True)
    


# [START guestlist]
class Guestlist(webapp2.RequestHandler):

    def get(self):
        confirmation_code = self.request.get('confirmation_code',
                                             DEFAULT_CONFIRMATION_CODE)
        party = 
                                             
