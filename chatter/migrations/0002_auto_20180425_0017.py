# Generated by Django 2.0.4 on 2018-04-25 00:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chatter', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chatter',
            name='timeRead',
            field=models.DateTimeField(blank=True),
        ),
    ]
