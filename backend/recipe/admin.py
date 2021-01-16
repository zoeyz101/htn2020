from django.contrib import admin
from .models import Food

# Register your models here.
class FoodAdmin(admin.ModelAdmin):
    list_display = ('name', 'aliases', 'amount', 'expiration')

admin.site.register(Food, FoodAdmin)

# superuser: admin, samplepassword