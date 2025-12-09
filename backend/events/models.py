from django.db import models

# Create your models here.


class Event(models.Model):
    event_name = models.CharField()
    description = models.CharField()
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    department = models.CharField()
    image = models.ImageField(upload_to='event-images/')
    contact_number = models.CharField()
    email = models.CharField()
    
    def __str__(self):
        return self.event_name

class Student(models.Model):
    student_id = models.IntegerField()
    first_name = models.CharField()
    last_name = models.CharField()
    department = models.CharField()
    program = models.CharField()
    year = models.CharField()
    section = models.CharField()
    contact_number = models.CharField()
    email = models.CharField()
    image = models.ImageField(upload_to='user-images/')
    
