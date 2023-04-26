from rest_framework import serializers
from .models import Contact

class ContactSerializers(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'name', 'surname', 'phone', 'email', 'company', 'photo']

class ContactSimpleSerializers(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'name', 'phone', 'email']