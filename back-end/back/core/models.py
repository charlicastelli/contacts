from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    email = models.EmailField()
    company = models.CharField(max_length=50)
    photo = models.ImageField(upload_to='images_profile', blank=True, null=True)

    def __str__(self):
        return self.name + " " + self.surname
