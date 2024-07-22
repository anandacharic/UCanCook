from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Note
from .models import Cuisine

class CuisineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cuisine
        fields = ["id","name","description","imageUrl","type","author"]
        extra_kwargs = {"author" : {"read_only":True}}

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id","username","password"]
        extra_kwargs = {"passsword" : {"write_only":True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ["id","title","content","createdAt","author"]
        extra_kwargs = {"author" : {"read_only":True}}