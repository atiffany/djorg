# Generated by Django 2.0.4 on 2018-04-25 20:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chatter', '0002_auto_20180425_0017'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chatter',
            name='timeRead',
            field=models.DateTimeField(null=True),
        ),
    ]
