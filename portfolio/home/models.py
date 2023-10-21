# Author: Kevin Lizarazu
# File: Handles the contents in the database
# Date: 10/20/2023
# Version: 1.0

from django.db import models
from django.contrib.postgres.fields import ArrayField

STATES = [
        ("Alabama", "AL"), ("Alaska", "AK"), ("Arizona", "AZ"), ("Arkansas", "AR"), ("California", "CA"),
        ("Wyoming", "WY"), ("Colorado", "CO"), ("Connecticut", "CT"), ("Delaware", "DE"), ("Florida", "FL"),
        ("Georgia", "GA"), ("Hawaii", "HI"), ("Idaho", "ID"), ("Illinois", "IL"), ("Indiana", "IN"),
        ("Iowa", "IA"), ("Kansas", "KS"), ("Kentucky", "KY"), ("Louisiana", "LA"), ("Maine", "ME"),
        ("Maryland", "MD"), ("Massachusetts", "MA"), ("Michigan", "MI"), ("Minnesota", "MN"), ("Mississippi", "MS"),
        ("Missouri", "MO"), ("Montana", "MT"), ("Nebraska", "NE"), ("Nevada", "NV"), ("New Hampshire", "NH"),
        ("New Jersey", "NJ"), ("New Mexico", "NM"), ("New York", "NY"), ("North Carolina", "NC"), ("North Dakota", "ND"),
        ("Ohio", "OH"), ("Oklahoma", "OK"), ("Oregon", "OR"), ("Pennsylvania", "PA"), ("Rhode Island", "RI"),
        ("South Carolina", "SC"), ("South Dakota", "SD"), ("Tennessee", "TN"), ("Texas", "TX"), ("Utah", "UT"),
        ("Vermont", "VT"), ("Virginia", "VA"), ("Washington", "WA"), ("West Virginia", "WV"), ("Wisconsin", "WI"),
    ]
TYPES = [
        ("lang", "Language"),
        ("pack", "Package"),
        ("dev", "Development"),
        ("soft", "Soft"),
    ]

# Education Data
class Education(models.Model):
    school_name = models.CharField(max_length=50)
    major = models.CharField(max_length=50)
    minor = models.CharField(max_length=50, null=True, blank=True)
    start_date = models.DateField(db_comment="Start Education Date")
    end_date = models.DateField(db_comment="Graduation Date", default="Present")
    country = models.CharField(max_length=50)
    state = models.CharField(max_length=20, choices=STATES, default="VA")
    city = models.CharField(max_length=25)
    coursework = ArrayField(models.CharField(max_length=30), blank=True, null=True)
    img_url = models.CharField(max_length=200)

# Skills Data
class Skill(models.Model):
    skill_name = models.CharField(max_length=30, unique=True)
    skill_type = models.CharField(max_length=20, choices=TYPES, null=True, blank=True)
    
# Experiences Data
class Experience(models.Model):
    company_name = models.CharField(max_length=20)
    role = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    start = models.DateField(db_comment="Start Experience")
    end = models.DateField(db_comment="End Experience", default="Present")
    country = models.CharField(max_length=50)
    state = models.CharField(max_length=20, choices=STATES, default="VA")
    city = models.CharField(max_length=25)
    description = ArrayField(models.CharField(max_length=200), blank=True, null=True)
    img_url = models.CharField(max_length=200)
